import { retrieveDeclarationAction } from "@/actions/declaration-action";
import { CloseDeclarationButton } from "@/components/close-declaration-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clearance } from "@/core/application/clearance";
import { Declaration } from "@/core/domain/entities/declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { Product } from "@/core/domain/entities/product";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DeclarationSummary({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [declaration] = await retrieveDeclarationAction({ id });

  if (!declaration) return redirect("/declarations");

  const clearance = Clearance.create(
    Declaration.instance({
      ...declaration,
      invoice: Invoice.instance({
        createdAt: declaration.invoice.createdAt,
        id: declaration.invoice.id,
        products: declaration.invoice.products.map((p) =>
          InvoiceProduct.create({
            amount: p.amount,
            product: Product.create(p.product),
            quantity: p.quantity,
          })
        ),
        quote: declaration.invoice.quote,
        registration: declaration.invoice.registration,
        status: declaration.status,
      }),
    })
  );

  const summary = clearance.calculate();

  return (
    <main className="w-full container mx-auto overflow-y-auto max-h-screen pt-20 pb-96">
      <header className="flex justify-between w-full items-center">
        <Link href="/declarations">
          <Button variant="link">
            <ArrowLeftIcon /> Voltar
          </Button>
        </Link>
        <CloseDeclarationButton
          id={id}
          hidden={declaration.status === "closed"}
        />
      </header>
      <div className="space-y-6 text-sm mx-auto">
        <h1 className="text-2xl font-semibold">Resumo da DI</h1>
        <div className="grid grid-cols-2 max-w-[300px] gap-2">
          <div className="font-semibold">Dolar Câmbio Invoice</div>
          <div className="text-right">
            {summary.invoiceQuote.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
              minimumFractionDigits: 4,
            })}
          </div>
          <div className="font-semibold">Cotação do Dólar DI</div>
          <div className="text-right">
            {summary.declarationQuote.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
              minimumFractionDigits: 4,
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 max-w-[500px] gap-1">
          <div className="bg-gray-500 text-white font-semibold uppercase px-2 py-1">
            FRETE
          </div>
          <div className="grid grid-cols-2 border border-gray-200 px-2 py-1">
            <div>
              {summary.freight.usd?.toLocaleString("pt-BR", {
                currency: "USD",
                style: "currency",
              })}
            </div>
            <div className="text-right">
              {summary.freight.brl?.toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </div>
          </div>

          <div className="bg-gray-500 text-white font-semibold uppercase px-2 py-1">
            SEGURO
          </div>
          <div className="grid grid-cols-2 border border-gray-200 px-2 py-1">
            <div>
              {summary.insurance.usd?.toLocaleString("pt-BR", {
                currency: "USD",
                style: "currency",
              })}
            </div>
            <div className="text-right">
              {summary.insurance.brl?.toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </div>
          </div>

          <div className="bg-gray-500 text-white font-semibold uppercase px-2 py-1">
            VMLE
          </div>
          <div className="border border-gray-200 px-2 py-1">
            {summary.vmle?.toLocaleString("pt-BR", {
              currency: "USD",
              style: "currency",
            })}
          </div>

          <div className="bg-gray-500 text-white font-semibold uppercase px-2 py-1">
            VMLD
          </div>
          <div className="grid grid-cols-2 border border-gray-200 px-2 py-1">
            <div>
              {summary.vmld?.toLocaleString("pt-BR", {
                currency: "USD",
                style: "currency",
              })}
            </div>
            <div className="text-right">
              {summary.vmldBRL?.toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </div>
          </div>
          <div className="bg-gray-500 text-white font-semibold uppercase px-2 py-1">
            Peso Líquido
          </div>
          <div className="border border-gray-200 px-2 py-1 text-right">
            {summary.weight?.toLocaleString("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
            })}
          </div>

          <div className="bg-gray-500 text-white font-semibold uppercase px-2 py-1">
            TOTAL PEÇAS
          </div>
          <div className="border border-gray-200 px-2 py-1 text-right">
            {summary.quantity}
          </div>
        </div>
        <h1 className="text-xl font-semibold">Produtos</h1>
        <div className="overflow-x-auto">
          <Table className="w-full text-xs">
            <TableHeader className="bg-gray-100 text-white">
              <TableRow className="border-b hover:bg-gray-100 border-gray-200">
                <TableHead className="text-center font-semibold w-full border whitespace-nowrap px-3">
                  Item
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Qtd.
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Valor unit.
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Total
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Seguro
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Frete
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Valor Aduaneiro
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  IPI
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  PIS
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  COFINS
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  ICMS
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Imposto de importação
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Despesas
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Variação Cambial
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Preço de Custo
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Preço Final
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Fator
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {summary.products.map((p, i) => (
                <TableRow key={String(i)} className="hover:bg-gray-50">
                  <TableCell className="border-x border-b border-gray-200 whitespace-nowrap">
                    {p.name}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.quantity}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.amount.toLocaleString("pt-BR", {
                      currency: "USD",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.total.toLocaleString("pt-BR", {
                      currency: "USD",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.insurance.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.freight.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.customs.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.ipi.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.pis.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.cofins.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.icms.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.ii.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.expensesTotalAmount.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.variation.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.costPrice.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {p.finalAmount.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </TableCell>
                  <TableCell className="text-center border-x bg-zinc-100 border-b border-gray-200 whitespace-nowrap">
                    {p.factor.toLocaleString("pt-BR", {
                      style: "decimal",
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    })}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.amount.toLocaleString("pt-BR", {
                    currency: "USD",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.insurance.brl.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.freight.brl.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.customs.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>
                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.ipi.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.pis.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.cofins.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.icms.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.ii.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.expensesTotalAmountByProduct.toLocaleString(
                    "pt-BR",
                    {
                      currency: "BRL",
                      style: "currency",
                    }
                  )}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.variation.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.costPrice.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>
                <TableCell className="text-center border-x border-b border-gray-200 bg-gray-100 whitespace-nowrap">
                  {summary.finalAmount.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>

                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <h1 className="text-xl font-semibold">Despesas</h1>
        <div className="overflow-x-auto max-w-[600px]">
          <Table className="w-full text-xs">
            <TableHeader className="bg-gray-100 text-white">
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  Descrição
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  USD
                </TableHead>
                <TableHead className="text-center font-semibold border whitespace-nowrap px-3">
                  BRL
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {summary.expenses.map((expense) => (
                <TableRow
                  key={expense.expense.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <TableCell className="border-x border-b border-gray-200 whitespace-nowrap">
                    {expense.expense.name}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {expense.expense.currency === "USD"
                      ? expense.amount.toLocaleString("pt-BR", {
                          currency: "USD",
                          style: "currency",
                        })
                      : "US$ 0,00"}
                  </TableCell>
                  <TableCell className="text-center border-x border-b border-gray-200 whitespace-nowrap">
                    {expense.expense.currency === "BRL"
                      ? expense.amount.toLocaleString("pt-BR", {
                          currency: "BRL",
                          style: "currency",
                        })
                      : (
                          expense.amount * summary.declarationQuote
                        ).toLocaleString("pt-BR", {
                          currency: "BRL",
                          style: "currency",
                        })}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell
                  colSpan={2}
                  className="border-x bg-gray-100 font-bold text-right border-b border-gray-200 whitespace-nowrap"
                >
                  Total
                </TableCell>
                <TableCell className="text-center bg-gray-100 font-bold border-x border-b border-gray-200 whitespace-nowrap">
                  {summary.expensesTotalAmount.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
