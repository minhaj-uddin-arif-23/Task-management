import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export function AddTask() {
  const form = useForm()
  const onSubmit = (data:any) => {
    console.log(data)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Add task to</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        
        </DialogHeader>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
         <FormLabel> Title</FormLabel>
        <FormLabel />
        <FormControl>
         <Input {...field} value={field.value || ""}/>
        </FormControl>
       
      </FormItem>
    )}
  />
     <FormField
    control={form.control}
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel> Descriptioin</FormLabel>
        <FormControl>
         <Textarea {...field} value={field.value || ""}/>
        </FormControl>
       
      </FormItem>
    )}
  />  
     <FormField
    control={form.control}
    name="select"
    render={({field}) => (
      <FormItem>
        <FormLabel> Select</FormLabel>
        <FormControl>
        <Select {...field}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Medium</SelectItem>
    <SelectItem value="dark">Low</SelectItem>
    <SelectItem value="system">High</SelectItem>
  </SelectContent>
</Select>
        </FormControl>
       
      </FormItem>
    )}
  />
  {/* time */}
  


        <DialogFooter className="mt-5">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
