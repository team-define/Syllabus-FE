export interface ILecture {
  code: string;
  univ_code: string;
  dprt_code: string;
  credit: number;
  lect_code: string;
  lect_type: string;
  lect_name: string;
  lect_div: number;
  lect_grade: number;
  lect_time: string;
  lect_place: string;
  prof_name: string;
}

export interface ILectures extends Array<ILecture> {}
