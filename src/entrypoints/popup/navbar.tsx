import { Button } from '@/components/ui/button'
import { RiAddLargeFill, RiSearchLine, RiDeleteBinLine } from 'react-icons/ri'
import { SlControlPlay } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const Navbar = () => { 
  const navigation = useNavigate()
  const onButtonClick = () => {
    navigation("/editRule", {
      state: { 
      }
    })
  }
  return (
    <>
      <div className='flex justify-between items-center'>
        logo
        <div>
          <Button variant="ghost" size={"icon"} onClick={onButtonClick}>
            <RiAddLargeFill size={20} />
          </Button>
          <Button variant="ghost" size={"icon"}>
            <RiSearchLine size={20} />
          </Button>
          <Button variant="ghost" size={"icon"}>
            <SlControlPlay size={20} />
          </Button>
          <Button variant="ghost" size={"icon"}>
            <RiDeleteBinLine size={20} />
          </Button>
        </div>
      </div>

    </>

  )
}

export default Navbar
