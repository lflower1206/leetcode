const dfs = (
  course: number,
  courseMap: Map<number, number[]>,
  isVisitMap: Map<number, boolean>
): boolean => {
  if (isVisitMap.get(course)!) {
    return false;
  }

  const neighbors = courseMap.get(course)!;

  if (neighbors === undefined || neighbors.length === 0) {
    return true;
  }

  isVisitMap.set(course, true);
  let _canFinish = true;

  while (_canFinish && neighbors.length > 0) {
    const neighbor = neighbors.pop()!;

    _canFinish = dfs(neighbor, courseMap, isVisitMap);
  }
  isVisitMap.set(course, false);

  return _canFinish;
};
const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
  const courses = Array(numCourses)
    .fill(0)
    .map((_, index) => index);
  const courseMap = new Map<number, number[]>();
  const isVisitMap = new Map<number, boolean>();

  prerequisites.forEach((prerequisite) => {
    const [course, dependencyCourse] = prerequisite;
    const adjacencyList = courseMap.get(course) ?? [];

    adjacencyList.push(dependencyCourse);

    courseMap.set(course, adjacencyList);
    isVisitMap.set(course, false);
  });

  return courses.every((course) => dfs(course, courseMap, isVisitMap));
};

export default canFinish;
