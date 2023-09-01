
import React, { Suspense } from "react"
import { Route, Outlet, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Router } from "@remix-run/router"

interface ToolboxRoutes {
  Home:   React.FunctionComponent;
  View:   React.FunctionComponent;
}

function initBrowserRouter(routeElements: ToolboxRoutes): Router {

  const { Home, View } = routeElements;

  const routes = (
    <Route path="/" element={ <Outlet /> }>
      <Route index element={ <Home /> } />
      <Route path="view" element={ <View /> } />
    </Route>
  );

  return createBrowserRouter( createRoutesFromElements(routes) );
    
}

export default initBrowserRouter;