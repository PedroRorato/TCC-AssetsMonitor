import { Card } from "@/components/ui"
// Styles
import './InfoCard.styles.scss';


interface InfoCardProps {
  title: string,
  description: string,
}

// Main Component
const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <Card className='info-card'>
      <h6 className="text-secondary">{title}</h6>
      <h5>{description}</h5>
    </Card>
  )
}

export default InfoCard