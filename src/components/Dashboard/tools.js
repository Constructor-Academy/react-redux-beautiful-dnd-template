export const extractResults = ( result, jobs ) => {
  //Unpack results object
  return {
    sourceCol: result.source.droppableId,
    destCol: result.destination.droppableId,
    jobId: result.draggableId,
    sourceIndex: result.source.index,
    destIndex: result.destination.index,
    job: jobs[result.source.droppableId].filter(job => result.draggableId === job.id)[0]
  }
}
export const insertJobInDestCol = ( { sourceCol, destCol, jobId, sourceIndex, destIndex, job }, jobs ) => {
  let destArray = jobs[destCol]
  let modJob = job
  modJob.index = destIndex
  modJob.status = destCol
  let res = [...destArray.filter(job => job.index < destIndex),
    modJob,
    ...destArray.filter(job => job.index >= destIndex)]
  
  return res.map(( job, index ) => {
    return { ...job, index: index }
  })
}
export const deleteJobFromSourceCol = ( { sourceCol, destCol, jobId, sourceIndex, destIndex, job }, jobs ) => {
  return [...jobs[sourceCol]].filter(job => job.id !== jobId).map(( job, index ) => {
    return { ...job, index: index }
  })
}

export const reArrangeInSameCol = ( { sourceCol, destCol, jobId, sourceIndex, destIndex, job }, jobs ) => {
  let selectionComplement = jobs[sourceCol].filter(job => jobId !== job.id)
  if(sourceIndex < destIndex) {
    let newCol = [...selectionComplement.filter(job => job.index <= destIndex),
      job,
      ...selectionComplement.filter(job => job.index > destIndex)
    ].map(( job, index ) => {
      return { ...job, index: index }
    })
    return {
      ...jobs,
      [sourceCol]: newCol
    }
  } else {
    let newCol = [...selectionComplement.filter(job => job.index < destIndex),
      job,
      ...selectionComplement.filter(job => job.index >= destIndex)
    ].map(( job, index ) => {
      return { ...job, index: index }
    })
    return {
      ...jobs,
      [sourceCol]: newCol
    }
  }
}
