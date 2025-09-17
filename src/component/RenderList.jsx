import Button from "../component/Button"

export default function RenderList({arr}) {
    return (
            <div className="flex flex-wrap overflow-hidden my-6 text-black ">
                {
                    arr.map((seed, index) => {
                        if(index === 0){
                            return (
                        <div className="mx-2 my-3 p-1 w-[100px] border-2 rounded-full border-green-700 overflow-hidden flex-1 basis-[14%] text-green-700 bg-green-700 mobail-a" key={index}>
                            <Button children={seed.name} href={seed.href} key={index} />
                        </div>
                    )
                        }
                        return (
                        <div className="mx-2 my-3 p-1 w-[100px] border-2 rounded-full hover:border-green-700 overflow-hidden flex-1 basis-[14%] bg-white mobail-a" key={index}>
                            <Button children={seed.name} href={seed.href} key={index} />
                        </div>
                    )
                    })
                }
            </div>
    )
}