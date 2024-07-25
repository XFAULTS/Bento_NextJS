import IconCloud from "@/components/icon-cloud";
import { CoolMode } from "@/components/cool-mode";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];



export default function Home() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl box-content h-lvh w-11/12 ">

      <div className="row1 flex gap-4 basis-1/2 rounded-3xl ">

        <div className="flex gap-4 flex-col basis-2/5 rounded-3xl  ">
          <div className="basis-3/5 rounded-3xl bg-red-300 box"></div>
          <div className="basis-2/5 flex rounded-3xl bg-orange-300 box centerCSS">
            <CoolMode>
            <button className="bg-orange-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Click Me</button>
            </CoolMode>
            
          </div>
        </div>

        <div className="flex gap-4 basis-1/2 rounded-3xl bg-rose-200 box centerCSS">
          <img src="face1.jpg" alt="pp" className="rounded-full" />
        </div>

        <div className=" flex flex-col gap-4 basis-3/5 rounded-3xl ">
          <div className="basis-1/3 rounded-3xl  bg-pink-300 box"></div>
          <div className="basis-2/3 rounded-3xl  bg-red-300 box"></div>
        </div>

      </div>


      <div className="row2 flex gap-4 basis-1/2 rounded-3xl ">

        <div className="flex flex-col gap-4 basis-4/6 rounded-3xl">

          <div className="basis-1/2 rounded-3xl bg-orange-400 box"></div>
          <div className=" flex gap-4 basis-1/2 rounded-3xl ">
            <div className="basis-2/3 rounded-3xl bg-yellow-300 box"></div>
            <div className="basis-1/3 rounded-3xl bg-yellow-200 box"></div>
          </div>

        </div>
        
        <div className="basis-2/6 flex rounded-3xl bg-white box centerCSS">
        <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
