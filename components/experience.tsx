import { Section } from '@react-email/components'
import React from 'react'
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data'

export default function Experience() {
  return (
    <section>
        <SectionHeading>My expereience</SectionHeading>
        {
            experiencesData.map((item,index)=>(
                <React.Fragment key={index}>
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75" >{item.description}</p>

                </React.Fragment>
            ))
        }

    </section>
  )
}
