const userTransformer = (request) => {
  return {
    _id: request._id,
    firstName: request.name,
    username: request.username
  }
}

export { userTransformer }
