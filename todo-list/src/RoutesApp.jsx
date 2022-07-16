import React from "react";
import { Routes, Route } from "react-router-dom";
import routePaths from "./routePath";
import FormListaTarea from "./components/FormListaTarea";
import Counter from "./components/Counter/Counter";
import TreeImage from "./components/TreeImage/TreeImage";
import Home from "./pages/Home";
import NotFound from "./pages/not-found/NotFound";
import Login from "./components/Login";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path={routePaths.index} element={<Home />} />
        <Route path={routePaths.listaTarea} element={<FormListaTarea />} />
        <Route path={routePaths.counter} element={<Counter />} />
        <Route path={routePaths.treeImage} element={<TreeImage />} />
        <Route path={routePaths.login} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
