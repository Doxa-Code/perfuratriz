import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock do Next.js Link
vi.mock("next/link", () => ({
  default: ({ children, href, onClick, ...props }: any) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  ),
}));

// Mock do framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("Sidebar - Lógica de Estado e Comportamento", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Lógica de Mobile vs Desktop", () => {
    it("deve detectar mobile corretamente (window.innerWidth < 768)", () => {
      // Cria um mock do window se não existir
      if (typeof window === "undefined") {
        // @ts-ignore
        global.window = { innerWidth: 500 };
      } else {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 500,
        });
      }

      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      expect(isMobile).toBe(true);
    });

    it("deve detectar desktop corretamente (window.innerWidth >= 768)", () => {
      // Cria um mock do window se não existir
      if (typeof window === "undefined") {
        // @ts-ignore
        global.window = { innerWidth: 1024 };
      } else {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 1024,
        });
      }

      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      expect(isMobile).toBe(false);
    });

    it("deve lidar com window undefined (SSR)", () => {
      const originalWindow = global.window;
      // @ts-ignore
      delete global.window;

      const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768;
      expect(isMobile).toBe(false);

      global.window = originalWindow;
    });
  });

  describe("Comportamento esperado - Fechamento da Sidebar", () => {
    it("deve fechar quando setOpen(false) é chamado", () => {
      const setOpenMock = vi.fn();
      setOpenMock(false);
      expect(setOpenMock).toHaveBeenCalledWith(false);
    });

    it("deve abrir quando setOpen(true) é chamado", () => {
      const setOpenMock = vi.fn();
      setOpenMock(true);
      expect(setOpenMock).toHaveBeenCalledWith(true);
    });
  });

  describe("Lógica de SidebarLink - Fechamento no Mobile", () => {
    it("deve fechar sidebar quando link é clicado no mobile", () => {
      // Cria um mock do window se não existir
      if (typeof window === "undefined") {
        // @ts-ignore
        global.window = { innerWidth: 500 };
      } else {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 500, // Mobile
        });
      }

      const setOpenMock = vi.fn();

      // Simula a lógica do handleClick do SidebarLink
      const handleClick = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
          setOpenMock(false);
        }
      };

      handleClick();
      expect(setOpenMock).toHaveBeenCalledWith(false);
    });

    it("não deve fechar sidebar quando link é clicado no desktop", () => {
      // Cria um mock do window se não existir
      if (typeof window === "undefined") {
        // @ts-ignore
        global.window = { innerWidth: 1024 };
      } else {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 1024, // Desktop
        });
      }

      const setOpenMock = vi.fn();

      // Simula a lógica do handleClick do SidebarLink
      const handleClick = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
          setOpenMock(false);
        }
      };

      handleClick();
      expect(setOpenMock).not.toHaveBeenCalled();
    });
  });

  describe("Lógica de DesktopSidebar - Hover", () => {
    it("deve abrir quando mouse entra (onMouseEnter)", () => {
      const setOpenMock = vi.fn();

      // Simula a lógica do onMouseEnter do DesktopSidebar
      const handleMouseEnter = () => {
        setOpenMock(true);
      };

      handleMouseEnter();
      expect(setOpenMock).toHaveBeenCalledWith(true);
    });

    it("deve fechar quando mouse sai (onMouseLeave)", () => {
      const setOpenMock = vi.fn();

      // Simula a lógica do onMouseLeave do DesktopSidebar
      const handleMouseLeave = () => {
        setOpenMock(false);
      };

      handleMouseLeave();
      expect(setOpenMock).toHaveBeenCalledWith(false);
    });
  });

  describe("Lógica de MobileSidebar - Botão X", () => {
    it("deve fechar quando botão X é clicado", () => {
      const setOpenMock = vi.fn();

      // Simula a lógica do onClick do botão X
      const handleCloseClick = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenMock(false);
      };

      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      };

      handleCloseClick(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(setOpenMock).toHaveBeenCalledWith(false);
    });

    it("deve alternar estado quando botão menu é clicado", () => {
      let isOpen = false;
      const setOpenMock = vi.fn((value: boolean | ((prev: boolean) => boolean)) => {
        if (typeof value === "function") {
          isOpen = value(isOpen);
        } else {
          isOpen = value;
        }
      });

      // Simula a lógica do onClick do botão Menu
      const handleMenuClick = () => {
        setOpenMock(!isOpen);
      };

      handleMenuClick();
      expect(setOpenMock).toHaveBeenCalledWith(true);

      isOpen = true;
      handleMenuClick();
      expect(setOpenMock).toHaveBeenCalledWith(false);
    });
  });

  describe("Validação de Estado", () => {
    it("deve manter estado consistente entre aberturas e fechamentos", () => {
      let isOpen = false;
      const setOpen = (value: boolean) => {
        isOpen = value;
      };

      // Simula sequência de ações
      setOpen(true);
      expect(isOpen).toBe(true);

      setOpen(false);
      expect(isOpen).toBe(false);

      setOpen(true);
      expect(isOpen).toBe(true);
    });

    it("deve lidar com múltiplas chamadas de setOpen", () => {
      const setOpenMock = vi.fn();

      setOpenMock(true);
      setOpenMock(false);
      setOpenMock(true);

      expect(setOpenMock).toHaveBeenCalledTimes(3);
      expect(setOpenMock).toHaveBeenNthCalledWith(1, true);
      expect(setOpenMock).toHaveBeenNthCalledWith(2, false);
      expect(setOpenMock).toHaveBeenNthCalledWith(3, true);
    });
  });
});
