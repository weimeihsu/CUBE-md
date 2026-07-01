<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design-doc routine (CUBE spec `.md` files)

Whenever the user asks you to build or update a spec doc in `public/doc/*.md` from a Figma source, treat it as a design-system audit — not just transcription:

1. **Verify local bindings.** Scan the source node and confirm every color, spacing, radius, and typography value binds to a **local** variable/style (the file's own `Primitive`, `Spacing`, `Radius` collections and paint/text styles), not a remote/library collection, a legacy duplicate (e.g. `Gray/Gray0` vs canonical `gray/gray0`), or a raw literal (`rgba(...)`, hex, px). Remember paints can be bound to paint **styles** (gradients, `Icon/color/*`), so a variable-only check under-counts — check styles too.
2. **Never edit instance interiors.** When rebinding in the source file, skip any node whose ancestor chain contains an `INSTANCE`; only fix the source components. Filter out construction/brand noise (`Icon Grid`, `logo`, `StatusBar`, native OS chrome) — those are intentionally unbound.
3. **Report improvement suggestions** after scanning: list mis-bound values (foreign collection, legacy duplicate, raw literal), values with no matching local token, and any binding inconsistencies. Offer to fix them.
4. **Document binding state** in the `.md` under an "實作備註 Implementation Notes" section so downstream agents rebuild with variables, not hard-coded values.
5. After registering a new doc, add it to the appropriate array in `app/guide/page.tsx` (`baseFiles` or `componentFiles`).
