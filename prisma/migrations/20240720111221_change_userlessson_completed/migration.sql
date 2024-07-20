-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Course" ("description", "id", "title") SELECT "description", "id", "title" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");
CREATE TABLE "new_UserLessonCompletion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "courseSlug" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "UserLessonCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLessonCompletion_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLessonCompletion_courseSlug_fkey" FOREIGN KEY ("courseSlug") REFERENCES "Course" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLessonCompletion" ("id", "lessonId", "userId") SELECT "id", "lessonId", "userId" FROM "UserLessonCompletion";
DROP TABLE "UserLessonCompletion";
ALTER TABLE "new_UserLessonCompletion" RENAME TO "UserLessonCompletion";
CREATE UNIQUE INDEX "UserLessonCompletion_userId_lessonId_key" ON "UserLessonCompletion"("userId", "lessonId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
