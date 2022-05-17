import {
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import ModalWrapper from "../ModalWrapper";
import AuthInputs from "./Input";
import OAuthButtons from "./OAuthButtons";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));

  const toggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };

  return (
    <ModalWrapper isOpen={modalState.open} onClose={handleClose}>
      <ModalHeader display="flex" flexDirection="column" alignItems="center">
        {modalState.view === "login" && "Login"}
        {modalState.view === "signup" && "Sign Up"}
        {modalState.view === "resetPassword" && "Reset Password"}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pb={6}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="70%"
        >
          {modalState.view === "login" || modalState.view === "signup" ? (
            <>
              <OAuthButtons />
              OR
              <AuthInputs toggleView={toggleView} />
            </>
          ) : (
            <></>
            // <ResetPassword toggleView={toggleView} />
          )}
        </Flex>
      </ModalBody>
    </ModalWrapper>
  );
};

export default AuthModal;
