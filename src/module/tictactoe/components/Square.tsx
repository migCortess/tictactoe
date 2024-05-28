export interface Squareprops { children:any, isSelected?:any, updateBoard?:(x:number)=>void, index?:any }

export const Square = ({ children, isSelected, updateBoard, index }:Squareprops) => {

  
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard!(index)
    }
  
    return (
      <div onClick={handleClick} className={`${className}  bg-skin-primary/10 hover:active:bg-skin-primary`}>
        {children}
      </div>
    )
  }
  