<div class="modal fade" @yield('modalID') tabindex=" -1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title margin-auto" id="exampleModalLabel">@yield('title_modal')</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-1  mb-3">
                @yield('content-modal')
            </div>
        </div>
    </div>
</div>
