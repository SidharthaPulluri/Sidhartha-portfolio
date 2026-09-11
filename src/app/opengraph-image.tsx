import { ImageResponse } from "next/og";
import { selfData } from "@/constant/self";
export const runtime = "edge";
export const alt = `${selfData.name} — AI engineer & curious builder`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"64px",background:"#f9f8f5",color:"#22232f"}}>
    <div style={{display:"flex",alignItems:"center",gap:"18px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"14px",background:"#22232f",color:"#fff",fontSize:"26px"}}>sp.</div><span style={{fontSize:"25px"}}>{selfData.name}</span></div>
    <div style={{display:"flex",flexDirection:"column",fontSize:"79px",fontWeight:700,letterSpacing:"-4px",lineHeight:1.06}}><span>A little research.</span><span style={{color:"#4c35c5"}}>A lot of building.</span></div>
    <div style={{display:"flex",justifyContent:"space-between",borderTop:"1px solid #dcdad3",paddingTop:"26px",fontSize:"22px",color:"#5d5e6a"}}><span>AI engineer & curious builder</span><span>Richardson, Texas · UT Dallas</span></div>
  </div>,size);
}
