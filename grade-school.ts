export class GradeSchool {
  private readonly rosterData: { [grade: number]: string[] } = {}

  public add(name: string, grade: number): void {
    // Remove student from previous grade
    for (const existingGrade of Object.keys(this.rosterData)) {
      const gradeNum = Number(existingGrade)
      const students = this.rosterData[gradeNum]
      const index = students.indexOf(name)

      if (index !== -1) {
        students.splice(index, 1)
        if (students.length === 0) {
          delete this.rosterData[gradeNum]
        }
      }
    }

    // Add student to new grade
    if (!this.rosterData[grade]) {
      this.rosterData[grade] = []
    }
    this.rosterData[grade].push(name)
    this.rosterData[grade].sort()
  }

  public roster(): { [grade: number]: string[] } {
    const result: { [grade: number]: string[] } = {}
    const sortedGrades = Object.keys(this.rosterData)
      .map(Number)
      .sort((a, b) => a - b)

    for (const grade of sortedGrades) {
      result[grade] = [...this.rosterData[grade]]
    }
    return Object.freeze(result) as { [grade: number]: string[] }
  }

  public grade(level: number): string[] {
    return Object.freeze([...(this.rosterData[level] || [])]) as string[]
  }
}
