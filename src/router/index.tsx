import { JsonForm } from "@/entrypoints/popup/json-form"
import Pages from "@/entrypoints/popup/pages"
import { TabsPage } from "@/entrypoints/popup/tab"
import { createHashRouter, Navigate } from "react-router-dom"

export const globalRouters = createHashRouter([
  {
    path: "/",
    element: <Pages />,
    children: [
      {
        path: "savedRules",
        element: <TabsPage />
      },
      {
        path: "editRule",
        element: <JsonForm />
      },

      // {
      //   path: "projectList",
      //   element: <ProjectList />
      // },
      // {
      //   path: "settings",
      //   element: <Setting />
      // },
      // {
      //   path: "about",
      //   element: <About />
      // },
      // {
      //   path: "logs",
      //   element: <Logs />
      // },
      {
        path: "/",
        element: <Navigate to="/savedRules" />
      },
      {
        path: "*",
        element: <Navigate to="/savedRules" />
      }
    ]
  }
])
