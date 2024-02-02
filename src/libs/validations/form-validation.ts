import  {z}  from "zod";

export const formValidations = z.object({
  movieName : z.string().min(1 , 'این فیلد حداقل باید یک حرف داشته باشد'),
  movieGenre : z.string().min(1 ,  "حدقل یکی رو انتخاب کن") ,
  movieDescription : z.string().min(1  ,'این فیلد نمیتواند خالی باشد'  ) ,
  movieDirector : z.string().min(1 , 'کارگردان کیست؟ نباید خالی باشد'),
  movieProduction : z.date(),
})

export type formValidation = z.infer<typeof formValidations>