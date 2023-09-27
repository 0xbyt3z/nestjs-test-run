-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friends" (
    "id" TEXT NOT NULL,
    "uId" TEXT NOT NULL,
    "fId" TEXT NOT NULL,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "uId" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostsLikes" (
    "id" TEXT NOT NULL,
    "pId" TEXT NOT NULL,
    "likedBy" TEXT NOT NULL,

    CONSTRAINT "PostsLikes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_uId_fkey" FOREIGN KEY ("uId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_fId_fkey" FOREIGN KEY ("fId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_uId_fkey" FOREIGN KEY ("uId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostsLikes" ADD CONSTRAINT "PostsLikes_pId_fkey" FOREIGN KEY ("pId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostsLikes" ADD CONSTRAINT "PostsLikes_likedBy_fkey" FOREIGN KEY ("likedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
