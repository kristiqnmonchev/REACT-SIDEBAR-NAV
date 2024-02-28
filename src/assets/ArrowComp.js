export const ArrowComp = ({open}) => {
    return(
        <>
            {/*?xml version="1.0" encoding="utf-8"?*/}
            {/* Generator: Adobe Illustrator 24.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
            <svg
            className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white rounded-full border-2 border-stone-900 duration-1000 ${!open && 'rotate-180'}`}
            
            version="1.1"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            style={{ enableBackground: "new 0 0 32 32" }}
            xmlSpace="preserve"
            >
            <style
                type="text/css"
                dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:none;}\n" }}
            />
            <title>caret--right</title>
            <polygon points="20,24 10,16 20,8 " />
            <rect className="st0" width={32} height={32} />
            </svg>
        </>
      
    )
}