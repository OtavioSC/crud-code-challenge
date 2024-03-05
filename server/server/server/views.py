from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from server.models import PostModel

@method_decorator(csrf_exempt, name='dispatch')
class PostView(View):
    def get_all_posts(request):
        posts = PostModel.objects.all()

        serialized_posts = [{
            'id': post.id,
            'username': post.username,
            'created_datetime': post.created_datetime.strftime('%Y-%m-%d %H:%M:%S'),
            'title': post.title,
            'content': post.content
        } for post in posts]
        
        return JsonResponse(serialized_posts, safe=False)

    def create_post(request):
            username = request.POST.get('username')
            title = request.POST.get('title')
            content = request.POST.get('content')

            new_post = Posts.objects.create(
                username=username,
                title=title,
                content=content
            )
            
            serialized_post = {
                'id': new_post.id,
                'username': new_post.username,
                'created_datetime': new_post.created_datetime.strftime('%Y-%m-%d %H:%M:%S'),
                'title': new_post.title,
                'content': new_post.content
            }
            
            return JsonResponse(serialized_post, status=201)
