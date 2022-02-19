import headerStyles from '../styles/Header.module.css'

 
const Header = ({ children }) => {
    return (
        <div>
         <h1 className={headerStyles.title}>
             <span> Testing. One, Two, One, Two </span>Noticias
         </h1>
         <p className={headerStyles.description}>
             Keep up to date with the newzzz</p>
         </div>
    
 
  )
}
 
export default Header
  