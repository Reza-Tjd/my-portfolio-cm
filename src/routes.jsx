import Experience from "./Pages/experience/Experience"
import Education from "./Pages/education/Education"
import HeaderBody from "./Pages/HeaderBody"

let routes = ([
    {path:'/', element:<HeaderBody/>},
    {path:'/experience', element:<Experience/>},
    {path:'/education', element:<Education/>},
   
])

export default routes