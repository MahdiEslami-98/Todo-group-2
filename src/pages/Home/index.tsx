import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValidation, formValidations } from "@/libs/validations/form-validation.ts";
import InputContainer from "@/pages/Home/component/InputContainer.tsx";
import Input from "@/pages/Home/component/Input.tsx";
import { Textarea } from "@/pages/Home/component/Textarea.tsx";
import { SelectOption } from "@/pages/Home/component/selectOption.tsx";

 const HomePage = () => {
  const {handleSubmit , formState : {errors}   , register} = useForm<formValidation>({
    mode : 'onChange',
    resolver : zodResolver(formValidations)
  })
   const onSubmit : SubmitHandler<formValidation> = (data) =>{
     console.log(data);
   }

  return (
      <div className={'w-full h-screen'}>
        <header className={'w-full bg-yellow-head h-1/6'}>
        </header>
        <div className={'bg-brown-home h-5/6 '}>
          <div className={'container mx-auto '}>

          <form onSubmit={handleSubmit(onSubmit)}
                className={"w-full grid grid-cols-3 grid-rows-2 gap-x-6 py-10 px-20 "}>
            <InputContainer name={"نام فیلم "}>
              <Input {...register("movieName")}
                     className={"py-2 rounded-md border border-grey-textlight placeholder:text-grey-textdark/50  bg-inherit w-full px-3 outline-none"}
                     placeholder={"نام فیلم را بنویسید"} />
              {errors.movieName?.message && <p className={'text-red-400'}>{errors.movieName?.message}</p>}
            </InputContainer>
            <InputContainer name={" ژانر فیلم "}>
              <SelectOption
                className={'py-2 rounded-md border border-grey-textlight placeholder:text-grey-textdark/50  bg-inherit w-full px-3 resize-none outline-none text-grey-textdark '} />
              {errors.movieGenre?.message && <p className={'text-red-400'}>{errors.movieGenre?.message}</p>}
            </InputContainer>
            <InputContainer name={" توضیحات "}>
              <Textarea {...register("movieDescription")}
                        className={"py-2 rounded-md border border-grey-textlight placeholder:text-grey-textdark/50  bg-inherit w-full px-3 resize-none outline-none"}
                        placeholder={"توضیحات درباره فیلم"} rows={3} cols={10} />
              {errors.movieDescription?.message && <p className={'text-red-400'}>{errors.movieDescription?.message}</p>}
            </InputContainer>
            <InputContainer name={"کارگردان "}>
              <Input
                {...register("movieDirector")}
                className={"py-2 rounded-md border border-grey-textlight placeholder:text-grey-textdark/50  bg-inherit w-full px-3 outline-none "}
                placeholder={"نام فیلم را بنویسید"} />
              {errors.movieDescription?.message && <p className={'text-red-400'}>{errors.movieDescription?.message}</p>}
            </InputContainer>
            <InputContainer name={"سال تولید "}>
              <Input
                {...register("movieProduction")}
                className={"py-2 rounded-md border border-grey-textlight placeholder:text-grey-textdark/50  bg-inherit w-full px-3 outline-none "}
                placeholder={"نام فیلم را بنویسید"} />
              {errors.movieName?.message && <p className={'text-red-400'}>{errors.movieProduction?.message}</p>}
            </InputContainer>
            <div className={'flex items-center justify-end gap-2'}>
              <button className={'bg-yellow-body text-brown-home px-12 py-2 rounded-lg'} type={"submit"}>ذخیره</button>
              <button className={'bg-inherit text-grey-textdark border px-12 py-2 rounded-lg'} type={"reset"}>انصراف
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>

  );
 };

export default HomePage;
