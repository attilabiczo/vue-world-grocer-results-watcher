# World Grocer Results Watcher Challenge

The project was implemented using Vue 3 in VueCLI @node14

Project Setup
----
```shell
npm install
```

### Compiles and Hot-Reload for development
```shell
npm run dev
```

After a while you should open http://localhost:8080/ to see the dashboard.

To replace API server there are two endpoints with mock data.
You can test it by opening http://localhost:8080/api/dashboard/widgets or http://localhost:8080/api/dashboard/chart
They are available only in dev mode.

### Compile and Minify for Production
```shell
npm run build
```

## Notes
The main entry point of the application is the ClientDashboard component that uses the useDashboardData composable as a store and logic wrapper.

useDashboardData composable uses useChartData and useWidgetData composables for fetching and converting data.

I tried to add interesting features like 
- formatNumber and formatDate value formatters (registered as plugin)
- custom component (custom-marker-box) as HTML element (registered as plugin)
- implemented simple mobile view. I usually use vue3-mq package for mobile-first responsive designs, for this simple POC application, I didn't want to introduce it
- added Bulma for fast sketching but also added simple scss rules
- added simple tests for formatNumber utility function

After loading the page the range input element could be used for changing the selected date to show the related CLV data.

