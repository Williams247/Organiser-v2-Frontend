import { AuthCard } from "@components/card";
import { FormButton, FormInput, FormPasswordInput } from "@components/widgets";
import { joiResolver } from "@hookform/resolvers/joi";
import { useSignin } from "@hooks/useAuth/useSignin";
import { RegisterForm } from "@hooks/utils/form";
import { SigninSchema } from "@hooks/utils/validation";
import { UserPayload } from "@utils/default";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Register: NextPage = () => {
  const { loading, signin } = useSignin();
  const formHook = useForm<UserPayload>({
    mode: "onChange",
    resolver: joiResolver(SigninSchema),
  });
  return (
    <>
      <div className={"h-screen flex justify-center items-center container"}>
        <div className={"w-[90%] sm:w-[90%] md:w-[50%] lg:w-[35%] pb-16 pt-28"}>
          <AuthCard title={"Sign in"} className={"mt-28"}>
            <div>
              <p>Please enter your details to sign up.</p>
              <div>
                <form
                  onSubmit={(...args) =>
                    void formHook.handleSubmit(signin)(...args)
                  }
                >
                  <FormInput
                    title={RegisterForm.FIRSTNAME}
                    handler={formHook}
                    label={"First Name"}
                    placeholder={"Williams"}
                    className={"w-full mt-4"}
                  />
                  <FormInput
                    title={RegisterForm.LASTNAME}
                    handler={formHook}
                    label={"Last Name"}
                    placeholder={"Alex"}
                    className={"w-full mt-4"}
                  />
                  <FormInput
                    title={RegisterForm.EMAIL}
                    handler={formHook}
                    label={"Email"}
                    placeholder={"williams@gmail.co"}
                    className={"w-full mt-4"}
                  />
                  <FormPasswordInput
                    title={RegisterForm.PASSWORD}
                    handler={formHook}
                    label={"Password"}
                    placeholder={"*******"}
                    className={"w-full mt-4"}
                  />
                  <FormPasswordInput
                    title={RegisterForm.CONFIRM_PASSWORD}
                    handler={formHook}
                    label={"Confirm Password"}
                    placeholder={"*******"}
                    className={"w-full mt-4"}
                  />
                  <FormButton loading={loading} className={"mt-4"}>
                    Register
                  </FormButton>
                </form>
              </div>
            </div>
            <p className={"mt-4 text-[14px]"}>
              Already have an account?{" "}
              <span className={"text-blue-700 underline"}>
                <Link href={"/"}>Login</Link>
              </span>
            </p>
          </AuthCard>
        </div>
      </div>
    </>
  );
};

export default Register;
