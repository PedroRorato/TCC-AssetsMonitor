import { Button } from "@/components/ui"

const HomePage = () => {
  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div>
      <h1>HomePage</h1>

      <Button onClick={handleClick}>Teste</Button>
    </div>
  )
}

export default HomePage