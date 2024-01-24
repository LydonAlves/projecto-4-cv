import { jobs, makeCards } from '../experienceCards/workExperience.'

//todo Add this to Notify: Here multiple copies of the objects were being sent to the array. So we used "! + includes" to make sure
//todo that only unique values were sent there

export const eFilterFunction = (dropDownDiv) => {
  const dropDown = dropDownDiv.querySelector('select')

  dropDown.addEventListener('change', () => {
    let selectedType = []
    jobs.forEach((job) => {
      if (dropDown.value === 'All') {
        selectedType.push(job)
      } else {
        job.type.forEach((type) => {
          if (dropDown.value === type) {
            if (!selectedType.includes(job)) {
              selectedType.push(job)
            }
          }
        })
      }
    })
    makeCards(selectedType)
  })
}
