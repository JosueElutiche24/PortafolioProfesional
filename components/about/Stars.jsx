function Star({color}){
    const estilo = {fill:"none",
        stroke:"#DFF6FF",
        strokeLinecap:"round",
        strokeLinejoin:"round",
        strokeMiterlimit:"10",
        strokeWidth:"2"}
return(
<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
<path d="m35.9928 10.7363-8.2015 16.6336-18.3519 2.6737 13.2851 12.9402-3.1283 18.2799 16.4122-8.6361 16.4186 8.6239-3.1419-18.2776 13.2755-12.95-18.3539-2.6601z" fill={color}/>
<path d="m35.9928 10.7363-8.2015 16.6336-18.3519 2.6737 13.2851 12.9402-3.1283 18.2799 16.4122-8.6361 16.4186 8.6239-3.1419-18.2776 13.2755-12.95-18.3539-2.6601z" style={estilo}/>
</svg>
)
}

export default Star