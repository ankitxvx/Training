

export default function Slider() {
  return (
    <div className="slider flex flex-col-reverse md:flex-row">

      <div className="right">
        <div className="md:absolute p-3">
          <img className=" w-full" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-AI-7Ed-Sapphire-MC001-3000x1682:VP4-1399x600" alt="" />
        </div>
        <div className="md:ml-14 md: relative  md:my-[13vh] md:w-[40vw] m-2 gap-2 left flex flex-col justify-start items-start md:items-baseline  ">
          <h1 className="text-4xl mx-5">Meet the lightning-fast Surface PCs</h1>
          <p className="w-3/4 mx-5">Unlock next-gen AI features like Recall and Cocreator with this exceptionally powerful laptop.</p>
          <button className="text-white ml-4 rounded-sm bg-[#0067b8] px-2 py-2">Learn more</button>
        </div>
      </div>
    </div>
  )
}
