import React,{useEffect} from "react"
import ContentLoader from "react-content-loader"

const MyDOMLoader = (props) => { 
 
  return (
  <ContentLoader 
    speed={4}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
)}
export default MyDOMLoader