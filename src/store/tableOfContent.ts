import { findLessonsById, getCompletedLessons } from "@/actions/state.action";
import { create } from "zustand";

// a type to store array of objects with
type TableOfContent = {
  lessons: {
    courseId: number;
    href: string;
    id: number;
    isCompleted: boolean;
    order: number;
    title: string;
  }[];
  update: (data: any) => void;
};

export const useTableOfContentState = create<TableOfContent>((set) => ({
  lessons: [],
  update: (data) => {
    set(() => ({
      lessons: data,
    }));
  },
  // async getDataAsync({ courseSlug, courseId }: any) {
  //   try {
  //     const lessons = await findLessonsById(courseId);
  //     const completedLessons = await getCompletedLessons(courseSlug);

  //     s
  //     console.log(Array.isArray(finalLessons));
  //     // set the final data
  //     set((state: any) => ({
  //       items: finalLessons,
  //     }));
  //   } catch (error) {}
  // },
}));
