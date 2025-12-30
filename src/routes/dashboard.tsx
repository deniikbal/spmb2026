import { createFileRoute } from '@tanstack/react-router'
import { authMiddleware } from 'lib/middleware'
import { TruckIcon, TriangleAlertIcon, CalendarX2Icon } from 'lucide-react'

import { Card } from '@/components/ui/card'

import ProductInsightsCard from '@/components/shadcn-studio/blocks/widget-product-insights'
import SalesMetricsCard from '@/components/shadcn-studio/blocks/chart-sales-metrics'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-01'
import TotalEarningCard from '@/components/shadcn-studio/blocks/widget-total-earning'
import TransactionDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-transaction'
import DashboardLayout from '@/components/layout/dashboard-layout'

// Statistics card data
const StatisticsCardData = [
  {
    icon: <TruckIcon className='size-4' />,
    value: '42',
    title: 'Shipped Orders',
    changePercentage: '+18.2%'
  },
  {
    icon: <TriangleAlertIcon className='size-4' />,
    value: '8',
    title: 'Damaged Returns',
    changePercentage: '-8.7%'
  },
  {
    icon: <CalendarX2Icon className='size-4' />,
    value: '27',
    title: 'Missed Delivery Slots',
    changePercentage: '+4.3%'
  }
]

// Earning data for Total Earning card
const earningData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png',
    platform: 'Zipcar',
    technologies: 'Vuejs & HTML',
    earnings: '-$23,569.26',
    progressPercentage: 75
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png',
    platform: 'Bitbank',
    technologies: 'Figma & React',
    earnings: '-$12,650.31',
    progressPercentage: 25
  }
]

// Transaction table data
const transactionData: Item[] = [
  {
    id: '1',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    avatarFallback: 'JA',
    name: 'Jack Alfredo',
    amount: 316.0,
    status: 'paid',
    email: 'jack@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '2',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    avatarFallback: 'MG',
    name: 'Maria Gonzalez',
    amount: 253.4,
    status: 'pending',
    email: 'maria.g@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '3',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    avatarFallback: 'JD',
    name: 'John Doe',
    amount: 852.0,
    status: 'paid',
    email: 'john.doe@shadcnstudio.com',
    paidBy: 'mastercard'
  }
]

const DashboardShell = () => {
  return (
    <DashboardLayout>
      <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
        {/* Statistics Cards */}
        <div className='col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1'>
          {StatisticsCardData.map((card, index) => (
            <StatisticsCard
              key={index}
              icon={card.icon}
              title={card.title}
              value={card.value}
              changePercentage={card.changePercentage}
            />
          ))}
        </div>

        <div className='grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2'>
          {/* Product Insights Card */}
          <ProductInsightsCard className='justify-between gap-3 [&>[data-slot=card-content]]:space-y-5' />

          {/* Total Earning Card */}
          <TotalEarningCard
            title='Total Earning'
            earning={24650}
            trend='up'
            percentage={10}
            comparisonText='Compare to last year ($84,325)'
            earningData={earningData}
            className='justify-between gap-5 sm:min-w-0 [&>[data-slot=card-content]]:space-y-7'
          />
        </div>

        <SalesMetricsCard className='col-span-full xl:col-span-2 [&>[data-slot=card-content]]:space-y-6' />

        <Card className='col-span-full w-full py-0'>
          <TransactionDatatable data={transactionData} />
        </Card>
      </div>
    </DashboardLayout>
  )
}

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
})

function RouteComponent() {
  return <DashboardShell />
}
