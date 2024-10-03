export function gerarTokenRecuperacaoSenha(usuarioContacto: string) {
  return usuarioContacto;
}

export function calcularValidadeDoToken() {
  return new Date();
}

export function checkIsTokenValido(dataExpiracao: Date) {
  return true;
}

export function extrairContactoDoToken(token: string) {
  return token;
}
