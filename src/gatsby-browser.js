export const onRouteUpdate = ({ location, prevLocation }) => {
    if (window.posthog && prevLocation) {
        window.posthog.capture('$pageview')
    }
}
