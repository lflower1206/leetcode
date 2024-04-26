const findOrder = (numCourses: number, prerequisites: number[][]): number[] => {
  const courses = Array.from({ length: numCourses }, (_, index) => {
    return index;
  });

  const isVisitMap = new Map<number, boolean>();
  const isCycleMap = new Map<number, boolean>();
  const courseMap = new Map<number, number[]>();

  courses.forEach((course) => {
    isVisitMap.set(course, false);
    isCycleMap.set(course, false);
    courseMap.set(course, []);
  });

  prerequisites.forEach((prerequisite) => {
    const [course, dependency] = prerequisite;

    courseMap.get(course)!.push(dependency);
  });

  let result: number[] = [];
  const dfs = (course: number): boolean => {
    if (isCycleMap.get(course) === true) {
      return false;
    }

    if (isVisitMap.get(course) === true) {
      return true;
    }

    isCycleMap.set(course, true);

    const dependencies = courseMap.get(course)!;
    let canFinish = true;

    while (dependencies.length > 0 && canFinish) {
      canFinish = dfs(dependencies.shift()!);
    }

    isCycleMap.set(course, false);
    isVisitMap.set(course, true);
    result.push(course);

    return canFinish;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      result = [];
      break;
    }
  }

  return result;
};

export default findOrder;
