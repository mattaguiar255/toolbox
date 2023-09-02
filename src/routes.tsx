
import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Router } from "@remix-run/router";
import RouteOutlet from "./components/RouteOutlet/RouteOutlet";

interface ToolboxRoutes {
  Home:   React.FunctionComponent;
  View:   React.FunctionComponent;
}

function initBrowserRouter(routeElements: ToolboxRoutes): Router {

  const { Home, View } = routeElements;

  const routes = (
    <Route path="/" element={ <RouteOutlet /> }>
      <Route index element={ <Home /> } />
      <Route path="view/:toolId" element={ <View /> } />
    </Route>
  );

  return createBrowserRouter( createRoutesFromElements(routes) );
    
}

export default initBrowserRouter;