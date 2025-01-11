export default function ShopBackground({firstName , secondName , thirdName}:{firstName:string , secondName:String , thirdName:string} ){
    return(
        <>
        <div className="h-[316px] bg-[url(/image10.jpg)] bg-cover flex flex-col justify-center items-center">
        <div className=" h-[132px]  flex flex-col justify-evenly items-center">
          <img className="h-[50px] w-[80px]" src="/image11.png" alt="logo" />
          <h2 className="text-5xl font-medium">{firstName}</h2>
        </div>
        <div>
          <p>
            {" "}
            <span className="font-medium">{secondName} {">"}</span> {thirdName}
          </p>
        </div>
      </div>
        </>
    )
}