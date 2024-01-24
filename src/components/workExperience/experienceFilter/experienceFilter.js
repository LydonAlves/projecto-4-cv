import { eFilterFunction } from '../eFilterFunction/eFIlterFunction'
import { jobs } from '../experienceCards/workExperience.'

const getUniqueJobsFromArray = () => {
  // const uniqueJobTypes = [...new Set(jobs.map((job) => job.type).flat())]
  // console.log(uniqueJobTypes)
  let allTypes = []

  jobs.forEach((job) => {
    allTypes = allTypes.concat(job.type)
  })

  //? Set is to remove duplicates
  const uniqueTypesSet = new Set(allTypes)
  const uniqueTypes = Array.from(uniqueTypesSet)

  return uniqueTypes
}

export const experienceFilter = (section) => {
  const dropDownDiv = document.createElement('div')
  const filterTitle = document.createElement('p')
  const dropdownContent = document.createElement('select')
  const listItemBlank = document.createElement('option')

  filterTitle.className = 'filterTitle'
  filterTitle.textContent = 'Search by Job Type'
  dropdownContent.className = 'dropdown-content'
  dropdownContent.id = 'dynamicDropdownContent'
  listItemBlank.innerText = 'All'

  dropdownContent.append(listItemBlank)
  getUniqueJobsFromArray().forEach((type) => {
    const listItem = document.createElement('option')
    listItem.classList.add('listItem')
    listItem.innerText = type
    listItem.value = type
    dropdownContent.append(listItem)
  })

  dropDownDiv.append(filterTitle)
  dropDownDiv.append(dropdownContent)
  section.append(dropDownDiv)
  eFilterFunction(dropDownDiv, section)
}
