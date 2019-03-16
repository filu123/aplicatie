import React from 'react'

const ProjectDetails = (props) => {
  let id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem Ipsum dolorum coasokaopskd aokd pakwod </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Filu</div>
                <div>29th september, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
