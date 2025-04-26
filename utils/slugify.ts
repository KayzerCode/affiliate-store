export function toUrlSlug(text: string): string {
 return text
   .toLowerCase()
   .trim()
   .replace(/\s+/g, '-')        // Replace spaces with -
   .replace(/[^a-z0-9-]/g, '')  // Remove all non-word chars
   .replace(/--+/g, '-')        // Replace multiple - with single -
   .replace(/^-+|-+$/g, '');    // Trim - from start and end
}
