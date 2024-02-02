import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formValidation,
  formValidations,
} from "@/libs/validations/form-validation.ts";
import InputContainer from "@/pages/Home/component/InputContainer.tsx";
import Input from "@/pages/Home/component/Input.tsx";
import Textarea from "@/pages/Home/component/Textarea.tsx";
import SelectOption from "@/pages/Home/component/selectOption.tsx";
import { useMutation } from "@tanstack/react-query";
import { createData } from "@/http-sevice/http-service";

const HomePage = () => {
  const { mutate } = useMutation({
    mutationKey: ["createData"],
    mutationFn: createData,
  });
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<formValidation>({
    mode: "onChange",
    resolver: zodResolver(formValidations),
  });
  const onSubmit: SubmitHandler<formValidation> = (data) => {
    mutate(data);
    reset();
  };
  console.log(errors);
  return (
    <div className={"h-full w-full"}>
      <header className={"h-1/6 w-full bg-yellow-head"}></header>
      <div className={"bg-brown-home h-5/6 "}>
        <div className={"container mx-auto "}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={
              "md grid w-full grid-cols-1 gap-x-6 gap-y-6 px-20 py-10 text-grey-textdark md:grid-cols-2 lg:grid-cols-3"
            }
          >
            <InputContainer name={"نام فیلم "}>
              <Input
                {...register("movieName")}
                className={
                  "w-full rounded-md border border-grey-textlight bg-inherit  px-3 py-2 outline-none placeholder:text-grey-textdark/50"
                }
                placeholder={"نام فیلم را بنویسید"}
              />
              {errors.movieName?.message && (
                <p className={"text-red-400"}>{errors.movieName?.message}</p>
              )}
            </InputContainer>
            <InputContainer name={" ژانر فیلم "}>
              <SelectOption
                {...register("movieGenre")}
                className={
                  "w-full resize-none rounded-md border border-grey-textlight  bg-inherit px-3 py-2 text-grey-textdark outline-none placeholder:text-grey-textdark/50 "
                }
              />
              {errors.movieGenre?.message && (
                <p className={"text-red-400"}>{errors.movieGenre?.message}</p>
              )}
            </InputContainer>
            <InputContainer name={" توضیحات "}>
              <Textarea
                {...register("movieDescription")}
                className={
                  "w-full resize-none rounded-md border border-grey-textlight  bg-inherit px-3 py-2 outline-none placeholder:text-grey-textdark/50"
                }
                placeholder={"توضیحات درباره فیلم"}
                rows={3}
                cols={10}
              />
              {errors.movieDescription?.message && (
                <p className={"text-red-400"}>
                  {errors.movieDescription?.message}
                </p>
              )}
            </InputContainer>
            <InputContainer name={"کارگردان "}>
              <Input
                {...register("movieDirector")}
                className={
                  "w-full rounded-md border border-grey-textlight bg-inherit  px-3 py-2 outline-none placeholder:text-grey-textdark/50 "
                }
                placeholder={"نام فیلم را بنویسید"}
              />
              {errors.movieDescription?.message && (
                <p className={"text-red-400"}>
                  {errors.movieDescription?.message}
                </p>
              )}
            </InputContainer>
            <InputContainer name={"سال تولید "}>
              <Input
                {...register("movieProduction")}
                type="date"
                className={
                  "w-full rounded-md border border-grey-textlight bg-inherit  px-3 py-2 outline-none placeholder:text-grey-textdark/50 "
                }
                placeholder={"نام فیلم را بنویسید"}
              />
              {errors.movieName?.message && (
                <p className={"text-red-400"}>
                  {errors.movieProduction?.message}
                </p>
              )}
            </InputContainer>
            <div className={"flex items-end justify-end gap-2"}>
              <button
                className={
                  "text-brown-home rounded-lg border border-yellow-body bg-yellow-body px-8 py-2 xl:px-12"
                }
                type={"submit"}
              >
                ذخیره
              </button>
              <button
                className={
                  "rounded-lg border bg-inherit px-8 py-2 text-grey-textdark xl:px-12"
                }
                type={"reset"}
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
