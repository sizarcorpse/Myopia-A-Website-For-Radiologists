import React, { useContext, createContext, useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
const CategoryContext = createContext();

export function useCategory() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handlePublished = async (categoryId) => {
    try {
      const r = await fetch(`/api/category/${categoryId}/publish`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        router.push(`/dashboard/categories/`);
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Category published failed", { variant: "error" });
    }
  };
  const handlePublishedAndMutate = async (categoryId, mutateCategories) => {
    try {
      const r = await fetch(`/api/category/${categoryId}/publish`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        mutateCategories();
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Category published failed", { variant: "error" });
    }
  };

  const handleDraft = async (categoryId) => {
    try {
      const r = await fetch(`/api/category/${categoryId}/draft`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        router.push(`/dashboard/categories/`);
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Category Draft failed", { variant: "error" });
    }
  };
  const handleDraftAndMutate = async (categoryId, mutateCategories) => {
    try {
      const r = await fetch(`/api/category/${categoryId}/draft`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        mutateCategories();
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Category Draft failed", { variant: "error" });
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      const r = await fetch(`/api/category/${categoryId}`, {
        method: "DELETE",
      });
      const rd = await r.json();

      if (rd.status === "success") {
        router.push(`/dashboard/categories/`);
        enqueueSnackbar("Category deleted successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category deleted failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Category deleted failed", { variant: "error" });
    }
  };
  const handleDeleteAndMutate = async (
    categoryId,
    mutateCategories,
    dataWillMutate
  ) => {
    try {
      mutateCategories(
        dataWillMutate.filter((c) => c._id != categoryId),
        false
      );

      const r = await fetch(`/api/category/${categoryId}`, {
        method: "DELETE",
      });
      const rd = await r.json();

      if (rd.status === "success") {
        mutateCategories();
        enqueueSnackbar("Category deleted successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category deleted failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Category deleted failed", { variant: "error" });
    }
  };

  const value = {
    handlePublished,
    handleDraft,
    handleDelete,
    handlePublishedAndMutate,
    handleDraftAndMutate,
    handleDeleteAndMutate,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
