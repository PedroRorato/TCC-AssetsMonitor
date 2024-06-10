import { useForm, FormProvider } from 'react-hook-form';
// import { uuidv4 } from 'uuid';
// Components
import { Button, Card, Input } from '@/components/ui'
// Hempers
import { interestSimulatorCalc } from '@/utils/helpers'
// Styles
import './InterestForm.styles.scss';

interface InterestFormProps {
  count: number,
  addChartLine: (chart: any) => void,
  addTableData: (chart: any) => void,
}

// Main
const InterestForm = ({ count, addChartLine, addTableData }: InterestFormProps) => {
  const methods = useForm();

  const onSubmit = (formData: any) => {
    let { initial, interest, monthly, months } = formData;
    // Parse Float
    initial = parseFloat(initial);
    interest = parseFloat(interest);
    monthly = parseFloat(monthly);
    months = parseFloat(months);
    // Get Chart
    const { data, total } = interestSimulatorCalc(
      parseFloat(initial), parseFloat(interest), parseFloat(monthly), parseFloat(months)
    );
    const id = `chart-${count}`;
    addChartLine({ id, data });
    addTableData({ id, initial, interest, monthly, months, total });
  }

  return (
    <FormProvider {...methods}>
      <Card className='mb-4'>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='interest-form-container'>
            <Input label='Valor Inicial' name='initial' type='number' step={0.01} />
            <Input label='Depósito mensal' name='monthly' type='number' step={0.01} />
            <Input label='Juro mensal(%)' name='interest' type='number' step={0.01} />
            <Input label='Meses' name='months' type='number' />
            <Button className='add-btn' type='submit'>Add</Button>
          </div>
        </form>
      </Card>
    </FormProvider>
  )
}

export default InterestForm;