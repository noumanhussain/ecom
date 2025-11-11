## Admin Categories Flow

-   **Purpose** Document how an authenticated admin request to `GET /admin/categories` is handled across the backend and frontend layers.

## Request Lifecycle

1. The request matches the route group defined in `routes/admin.php`, which applies the `auth` middleware, `admin` URL prefix, and `admin.` name prefix.

```20:26:routes/admin.php
    // Categories Management
    Route::resource('categories', CategoryController::class);
    Route::patch('categories/{id}/toggle-status', [CategoryController::class, 'toggleStatus'])->name('categories.toggle-status');
```

2. Because `Route::resource` is used, `GET /admin/categories` resolves to `CategoryController@index`.

## Controller Responsibilities

-   `CategoryController@index` loads all categories via Eloquent and returns an Inertia response that renders the `Admin/Categories/Index` React page.

```15:21:app/Http/Controllers/Admin/CategoryController.php
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories
        ]);
    }
```

-   Additional controller actions provide CRUD operations (`store`, `edit`, `update`, `destroy`) plus a custom `toggleStatus` endpoint wired to `PATCH /admin/categories/{id}/toggle-status`. These actions reuse the same model and redirect back to the index route with flash messages.

## Model Layer

-   The `Category` model exposes fillable attributes, type casts, and relationships that the controller leverages when retrieving and mutating data.

```10:65:app/Models/Category.php
class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'is_active',
        'sort_order',
        'parent_id',
    ];
    // ...
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
```

-   Seeder support is provided by `Database\Seeders\CategorySeeder`, which inserts sample parent and child categories to exercise the admin UI during development.

## Frontend (Inertia React)

-   The `Admin/Categories/Index` page receives the `categories` collection and renders a table with actions for creating, editing, deleting, and toggling status. It uses Inertia’s `router` helper to call the REST and custom toggle routes without a full page reload.

```11:108:resources/js/Pages/Admin/Categories/Index.jsx
export default function Categories({ categories, auth }) {
    const headers = ["ID", "Name", "Slug", "Status", "Actions"];
    // ...
    const handleStatusToggle = (categoryId, currentStatus) => {
        router.patch(
            route("admin.categories.toggle-status", categoryId),
            { is_active: !currentStatus },
            { preserveScroll: true, preserveState: true }
        );
    };
```

-   Creating or editing categories reuses the `Admin/Categories/CreateEdit` component, which determines whether to send a `POST` or `PUT` request based on the `isEditing` flag supplied by the controller.

```5:53:resources/js/Pages/Admin/Categories/CreateEdit.jsx
export default function CreateEdit({ category = null, isEditing = false }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: category?.name || "",
        slug: category?.slug || "",
        // ...
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            put(route("admin.categories.update", category.id), { onSuccess: () => reset() });
        } else {
            post(route("admin.categories.store"), { onSuccess: () => reset() });
        }
    };
```

-   Shared UI primitives such as `Table`, `TableRow`, `TableCell`, and `RadioSwitch` live under `resources/js/Components`. Importing these composables keeps the page-level components declarative and focused on behavior (column definitions, action handlers) instead of repetitive markup.

-   `useForm` centralizes form state, validation errors, and submission handling. Reusing this Inertia helper across forms keeps the code terse and consistent, avoiding manual `useState` plumbing for every field.

-   The index screen delegates navigation and HTTP verbs to Inertia’s `router`, so action handlers stay small and expressive (`router.delete`, `router.patch`) while Ziggy-generated route names preserve maintainability.

-   The `CreateEdit` component doubles as both the create and edit experience—`isEditing` and the optional `category` prop toggle the few spots that differ. All inputs, layout, and validation rendering remain single-sourced, which also simplifies future UI tweaks.

## Data Preparation

-   To see data in the admin table locally, run the category seeder (directly or via `DatabaseSeeder`) after migrating the database. This seeds hierarchical sample categories that appear in the `/admin/categories` view.
