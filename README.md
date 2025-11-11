## E-Commerce Admin Portal

This repository hosts an e-commerce admin portal built with Laravel, Inertia.js, and React. It provides authenticated back-office tooling for managing catalogue entities such as categories and products, alongside public-facing routes rendered through Inertia.

### Tech Stack

-   Laravel 11 (PHP 8.2) with Eloquent ORM
-   Inertia.js bridge with `@inertiajs/react`
-   React components styled with Tailwind CSS utilities
-   SQLite database for local development (configurable)

### Project Setup

1. Install PHP dependencies:
    ```bash
    composer install
    ```
2. Install Node dependencies and build assets:
    ```bash
    npm install
    npm run build   # or npm run dev for Vite dev server
    ```
3. Copy `.env.example` to `.env` and configure database credentials.
4. Generate the application key:
    ```bash
    php artisan key:generate
    ```
5. Run migrations and seeders:
    ```bash
    php artisan migrate --seed
    ```
    The seeder populates demo categories and products so the admin UI renders meaningful data.
6. Start the application:
    ```bash
    php artisan serve
    ```
    Visit `http://localhost:8000`.

### Admin Authentication

-   Admin routes live under the `admin` prefix and are protected by Laravel’s `auth` middleware (`routes/admin.php`).
-   Use the credential seeded by `DatabaseSeeder` or create an account manually to access the admin dashboard at `/admin`.

### Admin Categories Route Deep Dive

The entire `/admin/categories` flow is documented in `docs/admin-categories-route.md`. Highlights:

-   `GET /admin/categories` resolves via `Route::resource('categories', CategoryController::class)` to `App\Http\Controllers\Admin\CategoryController@index`, which loads all categories and returns an Inertia response.
-   `App\Models\Category` defines fillable fields, casts, and relationships for hierarchical categories and associated products.
-   React UI lives in `resources/js/Pages/Admin/Categories`:
    -   `Index.jsx` renders the table view, leveraging shared UI primitives (`Table`, `RadioSwitch`) and Inertia’s `router` helpers for delete/toggle actions.
    -   `CreateEdit.jsx` powers both create and edit flows through a single component, with `useForm` managing inputs, validation errors, and submission logic to keep forms consistent and reusable.
-   Supporting seed data is provided in `database/seeders/CategorySeeder.php` to showcase nested categories and status toggling.

Refer to the markdown doc for code excerpts and a step-by-step walkthrough of the request lifecycle, controller responsibilities, frontend composition, and data preparation.

### Frontend Architecture Notes

-   Component reuse is encouraged via `resources/js/Components`, where shared table cells, switches, and headers reside to avoid duplicating markup.
-   Inertia’s `useForm` hook standardizes client-side form state and error handling, while route generation uses Ziggy to remain DRY across PHP and JavaScript.

### Testing

Run the default Laravel test suite:

```bash
php artisan test
```

### Contributing

1. Create a feature branch.
2. Make your changes with accompanying documentation/tests.
3. Submit a pull request describing the motivation and implementation details.

### License

This project is open-sourced under the [MIT license](LICENSE).
