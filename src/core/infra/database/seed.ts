import { User } from "@/core/domain/entities/user";
import { UsersDatabaseRepository } from "../repositories/users-repository";
import { BcryptPasswordDriver } from "../drivers/password-driver";

const user = User.create({
  name: "Admin",
  email: "admin@perfuratriz.com.br",
});

if (!process.env.INITIAL_USER_PASS) {
  console.log("Defina INITIAL_USER_PASS para continuar");
  process.exit(0);
}

await UsersDatabaseRepository.instance().save(user);

const password = BcryptPasswordDriver.instance().create(
  process.env.INITIAL_USER_PASS!
);

await UsersDatabaseRepository.instance().setPassword(user.id, password);

console.log("Usuário criado com sucesso");
console.log("---------------------------------------");
console.log("Email: ", user.email);
console.log("Senha: ", process.env.INITIAL_USER_PASS);
console.log("---------------------------------------");

process.exit(0);
