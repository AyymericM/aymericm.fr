# Refactor project routing system

### Goal: Enable smooth url-based project rendering

## Steps:

- Add `withRouter()` on `MainStore.js`
- Replace current selection method on `MainStore.js` to be URL-based
- Trigger animations through `componentDidMount()` and exit functions instead of `this.props`
- Trigger route change through `this.props.history.push` inside exit functions and not `<Redirect />`
- Simplify animation handling (too many props on `<ProjectItem />`)
- Add redirect functions for API-offline mode