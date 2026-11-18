# Original server source

Reference copies from the Cloudflare/Sites deployment: API routes, timeline
editor, database migrations, authentication and Worker. These files are not
part of the GitHub Pages runtime. Their original relative imports assume the
original application layout, so restore that layout and the server Vite
configuration before deploying them to a Worker environment.
